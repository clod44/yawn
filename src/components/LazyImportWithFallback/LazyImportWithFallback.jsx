import { lazy } from "react";
import SomethingWentWrong from "../SomethingWentWrong";

const lazyImportWithFallback = (importFunc, fallbackComponent = SomethingWentWrong) => {
    return lazy(() =>
        importFunc().catch((error) => {
            console.error("Component Failed Loading:", error);
            return { default: fallbackComponent };
        })
    );
};

export default lazyImportWithFallback;
