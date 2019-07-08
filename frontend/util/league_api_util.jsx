export const createLeague = league => (
  $.ajax({
    method: 'POST',
    url: '/api/leagues',
    data: { league }
  })
);

export const deleteLeague = id => (
  $.ajax({
    method: 'DELETE',
    url: `/api/leagues/${id}`
  })
);

export const fetchLeagues = () => (
  $.ajax({
    method: "GET",
    url: '/api/leagues/'
  })
)