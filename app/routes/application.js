import Route from "@ember/routing/route";

export default class ApplicationRoute extends Route {
  model() {
    return {
      firstName: "Super",
      lastName: "Man"
    };
  }
}
