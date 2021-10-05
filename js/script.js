
// Fonction appelée lors du click du bouton
function start() {
  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER();
  // Appel de la fonction fetchTodayForecast

  apiWeather
    .getThreeDayForecast()
    .then(function(response) {

      // Récupère la donnée d'une API
      const data = response.data;
      console.log(data);
      
       // On récupère les informations principales
       for (let i = 0; i<4; i++ ){
        const main = data.list[i].weather[0].main;
        console.log(main);
        const description = data.list[i].weather[0].description;
        console.log(description);
        const temp = data.list[i].temp.day;
        console.log(temp);
        const icon = apiWeather.getHTMLElementFromIcon(data.list[0].weather[0].icon);
        console.log(icon);

        // Modifier les DOM
        document.getElementById(i+'-forecast-main').innerHTML = main;
        document.getElementById(i+'-forecast-more-info').innerHTML = description;
        document.getElementById(i+'-icon-weather-container').innerHTML = icon;
        document.getElementById(i+'-forecast-temp').innerHTML = `${temp-273}°C`;

       }
       

      
    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
}
