import { CheckCircle, Buildings, Star, Clock } from "@phosphor-icons/react/dist/ssr";

const ITEMS = [
  { icon: CheckCircle, value: "+500", label: "tarefas entregues" },
  { icon: Buildings, value: "+50", label: "empresas atendidas" },
  { icon: Clock, value: "< 4h", label: "tempo medio de resposta" },
  { icon: Star, value: "4.9/5", label: "satisfacao" },
];

export function TrustStrip() {
  return (
    <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[13px] text-ink-muted">
      {ITEMS.map((item, idx) => {
        const Icon = item.icon;
        return (
          <div key={item.label} className="flex items-center gap-2">
            <Icon weight="fill" size={14} className="text-accent-600" />
            <span className="font-semibold text-black">{item.value}</span>
            <span>{item.label}</span>
            {idx < ITEMS.length - 1 && (
              <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-gray-300 ml-3" />
            )}
          </div>
        );
      })}
    </div>
  );
}
