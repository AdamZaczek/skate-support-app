let nextvalue = 0
export const like = (id) => ({
  type: 'LIKE',
  value: nextvalue++,
  id,
})

export const dislike = (id) => ({
  type: 'DISLIKE',
  value: nextvalue--,
  id
})
