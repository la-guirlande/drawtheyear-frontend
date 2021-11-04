import { library } from '@fortawesome/fontawesome-svg-core';
import { faCaretSquareDown } from "@fortawesome/free-solid-svg-icons";

/**
 * FontAwesome configuration.
 */
export const faConfig = {
  load: () => library.add(faCaretSquareDown),
  reset: library.reset
}
