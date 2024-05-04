'use client';

import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import type { ChangeEvent, KeyboardEvent } from 'react';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { IoCloseSharp, IoSearch } from 'react-icons/io5';
import { CSSTransition } from 'react-transition-group';
import { fishEntities } from 'config/entities';
import { useResponsiveBreakpoints } from 'hooks';
import { filterByQuery } from 'lib/filter';
import { createFishPageUrl } from 'lib/routing';
import { sortSearchResults } from 'lib/sort';
import type { FishEntity } from 'types/fishes';
import { SearchInputOption } from './SearchInputOption';
import styles from './SearchInput.module.css';

export const SearchInput = () => {
  const router = useRouter();

  // Detect mobile and tablet screens
  const { isCompactView, isMediumView } = useResponsiveBreakpoints();

  // Current search value
  const [query, setQuery] = useState('');

  // Flag indicating if the current list of results is visible
  const [expanded, setExpanded] = useState(false);

  // Flag indicating whether the input element is focused
  const [focused, setFocused] = useState(false);

  // Index of the currently selected search result
  const [activeResultIndex, setActiveResultIndex] = useState(0);

  // References to input, wrapper and result list elements
  const inputRef = useRef<HTMLInputElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  // Build the list of search results
  const results = useMemo(() => {
    const entities = (
      query === '' ? fishEntities : fishEntities.filter(entity => filterByQuery(query, entity))
    )
      .sort(sortSearchResults)
      .reduce((acc, result) => acc.set(result.id, result), new Map<string, FishEntity>())
      .values();

    return [...entities];
  }, [query]);

  /**
   * Handle selecting (activating) an individual search result
   */
  const handleResultSelect = useCallback(
    (entity?: FishEntity) => {
      // Ensure the result at the specified index exists before proceeding
      const current = entity ?? results[activeResultIndex];
      if (!current) {
        return;
      }

      // Hide the list of search results and redirect the user to the fish details page
      setExpanded(false);
      router.push(createFishPageUrl(current.id));
    },
    [activeResultIndex, results, router],
  );

  /**
   * Handle input element value changes
   *
   * @param event Input's change event
   */
  const handleInputChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    // Reset the currently selected search result to be the first one
    setActiveResultIndex(0);

    // Store new input value in the local state
    setQuery(event.target.value);
  }, []);

  /**
   * Handle input element losing focus
   */
  const handleInputBlur = () => setFocused(false);

  /**
   * Handle input element gaining focus
   */
  const handleInputFocus = () => {
    // Set local focus state, show the search results and activate the first entry
    setActiveResultIndex(0);
    setFocused(true);
    setExpanded(true);
  };

  /**
   * Handle user pressing keyboard keys inside the input element
   *
   * @param event Input's keyboard event
   */
  const handleInputKeyDown = useCallback(
    (event: KeyboardEvent<HTMLInputElement>) => {
      // Ignore any checks if results are currently not visible
      if (!expanded) {
        return;
      }

      switch (event.key) {
        case 'ArrowDown':
          setActiveResultIndex(current => Math.min(results.length - 1, current + 1));
          break;
        case 'ArrowUp':
          setActiveResultIndex(current => Math.max(0, current - 1));
          break;
        case 'Enter':
          handleResultSelect();
          break;
        case 'Escape':
          setExpanded(false);
          break;
        default:
          return;
      }

      event.preventDefault();
    },
    [expanded, handleResultSelect, results.length],
  );

  /**
   * Handle clicking on the close results button in the input
   */
  const handleResultsCloseClick = useCallback(() => setExpanded(false), []);

  // Generate the search result elements to render
  const searchResults = useMemo(() => {
    // Create the list of search results
    const output = (
      <div className={styles.SearchInputResults} ref={resultsRef}>
        {results.map((entity, index) => (
          <SearchInputOption
            active={activeResultIndex === index}
            entity={entity}
            key={entity.id}
            onClick={handleResultSelect}
          />
        ))}
      </div>
    );

    // Render search results inside the layout to enable showing them in full-screen view
    if (isCompactView || isMediumView) {
      const layout = document.getElementById('layout');

      if (layout) {
        const portal = createPortal(output, layout, 'search-results');
        return <>{portal}</>;
      }
    }

    // Return results as-is and display them under the input
    return output;
  }, [activeResultIndex, handleResultSelect, isMediumViewLT, results]);

  // Close search results and reset the state when switching between desktop and mobile views
  useEffect(() => setExpanded(false), [isMediumViewLT]);

  // Reset component state when search results are removed
  useEffect(() => {
    if (!expanded) {
      // Clear search query when hiding the list of results
      setQuery('');

      // Remove focus from the input element when hiding the list of results
      inputRef.current?.blur();
    }
  }, [expanded]);

  // Ensure list of results is closed when clicking outside the current search input component
  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      const contains = wrapperRef.current?.contains(event.target as Node) ?? false;
      if (!contains) {
        setExpanded(false);
      }
    };

    document.addEventListener('click', handleDocumentClick);

    return () => document.removeEventListener('click', handleDocumentClick);
  }, []);

  return (
    <div
      className={clsx(styles.SearchInput, {
        [styles.SearchInputExpanded]: expanded,
        [styles.SearchInputFocused]: focused,
      })}
      ref={wrapperRef}
    >
      <IoSearch className={styles.SearchInputIconSearch} />

      {expanded && (
        <IoCloseSharp className={styles.SearchInputIconClose} onClick={handleResultsCloseClick} />
      )}

      <div className={styles.SearchInputWrapper}>
        <input
          className={styles.SearchInputElement}
          placeholder="Search..."
          ref={inputRef}
          value={query}
          onBlur={handleInputBlur}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onKeyDown={handleInputKeyDown}
        />
      </div>

      <CSSTransition
        classNames={{
          enter: styles.SearchInputResultsEnter,
          enterActive: styles.SearchInputResultsEnterActive,
          enterDone: styles.SearchInputResultsEnterDone,
          exit: styles.SearchInputResultsExit,
          exitActive: styles.SearchInputResultsExitActive,
        }}
        in={expanded}
        mountOnEnter={true}
        nodeRef={resultsRef}
        timeout={150}
        unmountOnExit={true}
      >
        {searchResults}
      </CSSTransition>
    </div>
  );
};
