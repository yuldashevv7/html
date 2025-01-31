// Jamoa elementlari bilan ishlash
const teamItems = document.querySelectorAll('.team-item');
const playerInfo = document.getElementById('player-info');
const playerName = document.querySelector('#player-info h3');
const playerTeam = document.getElementById('player-team');
const playerValue = document.getElementById('player-value');

// Har bir jamoa elementiga hodisa qo'shish
teamItems.forEach(item => {
  item.addEventListener('click', function() {
    const teamName = this.getAttribute('data-team');
    const teamDetails = getTeamDetails(teamName);

    // Futbolchi profilini yangilash
    playerName.innerText = `${teamName} futbolchisi`;
    playerTeam.innerText = `Jamoa: ${teamDetails.team}`;
    playerValue.innerText = `Transfer qiymati: ${teamDetails.value}`;
  });
});

// Jamoa haqida ma'lumot olish
function getTeamDetails(team) {
  const teams = {
    'Barcelona': { team: 'FC Barcelona', value: '1.2B EUR' },
    'Real Madrid': { team: 'Real Madrid', value: '1.5B EUR' },
    'Manchester United': { team: 'Manchester United', value: '1.0B EUR' }
  };

  return teams[team] || { team: 'Noma’lum', value: '0 EUR' };
}

// Izlash uchun funksiyalar (keyingi bosqichda qo'shish mumkin)
const searchInput = document.getElementById('search-bar');
searchInput.addEventListener('input', function() {
  const query = searchInput.value.toLowerCase();
  filterTeams(query);
});

function filterTeams(query) {
  teamItems.forEach(item => {
    const teamName = item.getAttribute('data-team').toLowerCase();
    if (teamName.includes(query)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
