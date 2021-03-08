class KRuokaApi {
  public searchRecipes(
    search: string,
    onSuccess: (data) => void,
    onFailure: (error) => void
  ) {
    fetch(
      // TODO cors is meant to be used only for DEBUGGING purposes! plz remove cors at some point
      `https://thingproxy.freeboard.io/fetch/https://www.k-ruoka.fi/kr-api/search?offset=0&q=${search}`,
      {
        mode: "cors",
      }
    )
      .then((response) => response.json())
      .then(onSuccess)
      .catch(onFailure);
  }
  fetchRecipe(url, onSuccess: (data) => void, onFailure: (error) => void) {
    // TODO cors is meant to be used only for DEBUGGING purposes! plz remove cors at some point
    fetch(`https://thingproxy.freeboard.io/fetch/${url}`)
      .then((response) => response.text())
      .then(onSuccess)
      .catch(onFailure);
  }
}

export default new KRuokaApi();
