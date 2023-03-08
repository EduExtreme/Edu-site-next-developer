import Link from 'next/link';
import { styled } from '../../config/stitches';

export const Container = styled(Link, {
  textDecoration: 'none',
  color: 'white',
  display: 'flex',
  alignItems: 'center',
  borderRadius: '1rem',
  gap: '0.75rem',

  '@md': {
    fontSize: 0,
    width: '4.5rem',
  },
});
