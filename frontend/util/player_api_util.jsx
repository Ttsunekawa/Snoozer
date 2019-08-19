export const fetchPlayers = () => (
  $.ajax({
    method: "GET",
    url: '/api/players/'
  })
)
