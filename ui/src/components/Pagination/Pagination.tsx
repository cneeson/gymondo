import React from 'react';
import { Flex } from '../Flex';
import { Text } from '../Text';
import { PaginationProps } from './types';
import { PaginationButton } from './styled';

const VISIBLE_PAGES = 6;
const VISIBLE_PAGES_MIDPOINT = VISIBLE_PAGES / 2;

const createArrayOfLength = (length: number) => Array.from(new Array((length <= 0) ? 0 : length - 1));

const handleClick = (handler: Function) => (e: any) => {
    e.preventDefault();
    handler();
};

const generatePageNumber = (currentPage: number, onSelection: Function) => (_: any, index: number) => {

    const pageNumber = index + 1;
    return (
        <PaginationButton
            isSelected={currentPage === pageNumber}
            onClick={handleClick(() => onSelection(index))}
            key={pageNumber}
        >
            {pageNumber}
        </PaginationButton>
    );
};

const getPageNumbers = (totalPages: number, currentPage: number, onSelection: Function) => {
    const pages = createArrayOfLength(totalPages);
    const pageNumberElements = pages
        .map(generatePageNumber(currentPage, onSelection));

    const startIndex = currentPage <= VISIBLE_PAGES_MIDPOINT ? 0 : currentPage - VISIBLE_PAGES_MIDPOINT;

    return pageNumberElements.splice(startIndex, VISIBLE_PAGES);
};

const Pagination = (props: PaginationProps) => {
    const { onNextPage, onPrevPage, onPageSelection, totalPages = 1, currentPage = 0, ...styleProps } = props;
    const selectedPage = currentPage + 1;
    const maxPages = totalPages === 0 ? 1 : totalPages;

    const pageNumberElements = getPageNumbers(maxPages, selectedPage, onPageSelection);

    const hasMorePages = maxPages >= VISIBLE_PAGES && selectedPage < (maxPages - VISIBLE_PAGES_MIDPOINT);
    const isFirstPage = selectedPage === 1;
    const isLastPage = selectedPage === maxPages;

    return (
        <Flex justifyContent='center' {...styleProps}>
            <Flex>
                <PaginationButton
                    onClick={handleClick(onPrevPage)}
                    disabled={isFirstPage}
                    isNavigator
                >
                    &larr;
                </PaginationButton>

                {pageNumberElements}

                {hasMorePages && (
                    <Text
                        m='unset'
                        mx={1}
                        display='inline'
                        width='32px'
                    >
                        ...
                    </Text>
                )}

                <PaginationButton
                    isSelected={selectedPage === maxPages}
                    onClick={handleClick(() => onPageSelection(maxPages - 1))}
                >
                    {maxPages}
                </PaginationButton>

                <PaginationButton
                    onClick={onNextPage}
                    disabled={isLastPage}
                    isNavigator
                >
                    &rarr;
                </PaginationButton>
            </Flex>
        </Flex>
    );
};

export { Pagination };
