// TODO cors is meant to be used only for DEBUGGING purposes! plz remove cors at some point
const corsProviderForDebuggingUseOnly = "https://thingproxy.freeboard.io/fetch/"

const options: RequestInit = {
  mode: "cors",
}
class KRuokaApi {
  public searchRecipes(
    search: string,
    onSuccess: (data) => void,
    onFailure: (error) => void
  ) {
    fetch(
      `${corsProviderForDebuggingUseOnly}https://www.k-ruoka.fi/kr-api/search?offset=0&q=${search}`,
      options
    )
      .then((response) => response.json())
      .then(onSuccess)
      .catch(onFailure);
  }
  fetchRecipe(url, onSuccess: (data) => void, onFailure: (error) => void) {
    fetch(`${corsProviderForDebuggingUseOnly}${url}`, options)
      .then((response) => response.text())
      .then(onSuccess)
      .catch(onFailure);
  }
}

export default new KRuokaApi();
