import R from 'ramda';

export const searchById = R.useWith(
  R.find,
  R.propEq('id'),
  R.identity
);

export function generateGuid () {
  return Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15);
}
