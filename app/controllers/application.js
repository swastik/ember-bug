import Controller from "@ember/controller";
import { set, action, computed } from "@ember/object";

export default class ApplicationController extends Controller {
  model = null;

  @computed("model.{firstName,lastName}")
  get fullName() {
    return `${this.model.firstName} ${this.model.lastName}`;
  }

  @action
  updateAttr(attr, value) {
    set(this.model, attr, value);
  }
}
