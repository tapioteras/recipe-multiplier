class KRuokaApi {
  public async searchRecipes(search: string) {
    await fetch(`https://cors-anywhere.herokuapp.com/https://www.k-ruoka.fi/kr-api/search?offset=0&q=${search}`, {
      mode: "cors",
    });
  }
}

export default new KRuokaApi();
