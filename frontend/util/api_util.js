export const fetchAllPokemon = (success) => (
  $.ajax({
    method: 'GET',
    url: '/api/pokemon',
    success
  })
);

export const fetchAPokemon = (id, success) => (
  $.ajax({
    method: 'GET',
    url: `/api/pokemon/${id}`,
    success
  })
);

export const postAPokemon = (formData, success) => (
  $.ajax({
    method: "POST",
    url: `/api/pokemon`,
    data: formData,
    success
  })
);
