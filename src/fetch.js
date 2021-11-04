const fetchApi = async () => {
  try {
    // 1
    const resp = await fetch(
      "https://baconipsum.com/api/?type=meat-and-filler"
    );

    // 2
    const data = await resp.json();

    // 3
    document.querySelector(".text").innerHTML = data;
  } catch (err) {
    // 4
    throw err;
  }
};

// 5
fetchApi();

// COMMENTS
/**
 * 1. appel à l'API
 * 2. une fois qu'on reçoit les données, on les parse en JSON
 *    et on les stocke dans data
 * 3. puis on injecte data (les données de l'API) dans le DOM
 * 4. try & catch pour la gestion des erreurs
 * 5. appeler la fonction fetchApi
 */
