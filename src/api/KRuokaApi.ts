class KRuokaApi {
  public searchRecipes(
    search: string,
    onSuccess: (data) => void,
    onFailure: (error) => void
  ) {
    fetch(
      `https://cors-anywhere.herokuapp.com/https://www.k-ruoka.fi/kr-api/search?offset=0&q=${search}`,
      {
        mode: "cors",
      }
    )
      .then(response => response.json())
      .then(onSuccess)
      .catch(onFailure);
  }
}

export default new KRuokaApi();
