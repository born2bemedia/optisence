'use client';

import type { ReactNode } from 'react';

import { Text } from '@/shared/ui/kit/text';

import { Url } from './url';

export const List = ({
  values,
  gap = 8,
  noHighlight = false,
}: {
  values: (ReactNode | { text: string; href: string })[];
  gap?: number;
  noHighlight?: boolean;
}) => {
  return (
    <ul
      className="marker:text-primary flex list-disc flex-col pl-5"
      style={{ gap: `${gap}px` }}
    >
      {values.map((item, index) => {
        if (noHighlight) {
          return (
            <li key={`list-item-${index}`}>
              <Text>
                {typeof item === 'object' && item !== null && 'text' in item
                  ? item.text
                  : item}
              </Text>
            </li>
          );
        }

        const itemText =
          typeof item === 'object' && item !== null && 'text' in item
            ? item.text
            : item;

        if (typeof itemText !== 'string') {
          return (
            <li key={`list-item-${index}`}>
              <Text>{itemText}</Text>
            </li>
          );
        }

        const [highlight, ...rest] = itemText.split(':');
        const remainder = rest.join(':').trim();

        return (
          <li key={`list-item-${index}`}>
            <Text>
              <span className="text-primary">{highlight}:</span>
              {remainder && (
                <>
                  {' '}
                  {typeof item === 'object' &&
                  item !== null &&
                  'href' in item ? (
                    <Url value={item.href} placeholder={remainder} />
                  ) : (
                    remainder
                  )}
                </>
              )}
            </Text>
          </li>
        );
      })}
    </ul>
  );
};
