import ChildrenPage from "./ChildrenPage";
import ContextPage from "./ContextPage";
import RefPage from "./RefPage";
import SetStatePage from "./SetStatePage";
import UseEffectPage from "./UseEffectPage";
import ClosurePage from "./ClosurePage";
import UseMemoPage from "./UseMemoPage";
import ReactRender from "./ReactRender";

export default function ReactApiUsePage() {
  return (
    <div style={{ paddingBottom: 50 }}>
      <ChildrenPage />
      <ContextPage />
      <RefPage />
      <SetStatePage />
      <UseEffectPage />
      <ClosurePage />
      <UseMemoPage />
      <ReactRender />
    </div>
  );
}
