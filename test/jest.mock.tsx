import { AppContext } from "@src/context/AppContext";
import { CartItemType } from "@src/shared/interfaces/Cart";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render } from "@testing-library/react-native";
import { ReactNode } from "react";
import { calculateCartTotalMock } from "./cart.mock";

interface Props {
  cart?: CartItemType[];
}

const queryClient = new QueryClient({
  defaultOptions: { queries: { cacheTime: Infinity } },
});

export const customRender = (node: ReactNode, props?: Props) => {
  props = props || {};

  return render(
    <QueryClientProvider client={queryClient}>
      <AppContext.Provider
        value={{ ...props, calculateCartTotal: calculateCartTotalMock }}
      >
        {node}
      </AppContext.Provider>
    </QueryClientProvider>
  );
};
