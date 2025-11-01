'use client';
import { FC, memo } from 'react';

type AvatarProps = {
  src?: string | File;
  name?: string;
  mode?: 'desktop' | 'mobile';
  className?: string;
};

const Avatar: FC<AvatarProps> = memo(
  ({ src, name, mode = 'desktop', className = '' }) => {
    const imageSrc =
      typeof src === 'string'
        ? src
        : src instanceof File
          ? URL.createObjectURL(src)
          : undefined;

    const initials =
      name
        ?.split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase() ?? '?';

    const isMobile = mode === 'mobile';

    return (
      <div
        className={` ${isMobile ? 'relative flex h-auto w-full items-center justify-end overflow-hidden' : 'h-[120px] w-[180px] overflow-hidden rounded-full border border-gray-200 bg-[var(--color-primary-dark)]'} ${className} `}
      >
        {isMobile && (
          <div className="absolute bottom-[-127px] right-[-136px] z-[-1] size-[350px] rounded-full border-4 border-[var(--color-primary)] bg-[var(--color-primary-dark)]" />
        )}

        {imageSrc ? (
          <img
            src={imageSrc}
            alt={name || 'Avatar'}
            className={` ${
              isMobile
                ? 'relative z-10 h-[280px] w-[180px] object-cover object-top'
                : 'object-contain'
            } `}
          />
        ) : (
          <span className="text-sm font-medium text-gray-600">{initials}</span>
        )}
      </div>
    );
  },
);

Avatar.displayName = 'Avatar';
export default Avatar;
