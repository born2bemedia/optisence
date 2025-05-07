'use client';

import { Text } from '@/shared/ui/kit/text';

import { Url } from './url';

export const List = ({
  values,
  gap = 8,
  noHighlight = false,
}: {
  values: (string | { text: string; href: string })[];
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
              <Text>{typeof item === 'string' ? item : item.text}</Text>
            </li>
          );
        }

        const itemText = typeof item === 'string' ? item : item.text;
        const [highlight, ...rest] = itemText.split(':');
        const remainder = rest.join(':').trim();

        return (
          <li key={`list-item-${index}`}>
            <Text>
              <span className="text-primary">{highlight}:</span>
              {remainder && (
                <>
                  {' '}
                  {typeof item === 'object' && item.href ? (
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
