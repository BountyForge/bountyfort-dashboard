import { describe, it, expect } from 'vitest';
import { formatAddress, formatAmount } from '@/lib/format';

describe('formatAddress', () => {
  it('should truncate a long address', () => {
    const address = 'GABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
    expect(formatAddress(address)).toBe('GABC...7890');
  });

  it('should return empty string for empty input', () => {
    expect(formatAddress('')).toBe('');
  });

  it('should not truncate if address is short', () => {
    const short = 'GABC';
    expect(formatAddress(short)).toBe(short);
  });
});

describe('formatAmount', () => {
  it('should format numbers with commas', () => {
    expect(formatAmount(1000)).toBe('1,000');
    expect(formatAmount('25000')).toBe('25,000');
  });

  it('should handle decimals', () => {
    expect(formatAmount(1234.567)).toBe('1,234.57');
  });
});
