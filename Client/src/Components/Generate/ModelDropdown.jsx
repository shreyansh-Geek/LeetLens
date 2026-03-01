import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/dropdown";

export default function ModelDropdown({
  models,
  model,
  setModel,
  selectedModel,
}) {
  return (
    <div>
      <label className="text-sm text-gray-400 mb-2 block">
        Model
      </label>

      <Dropdown placement="bottom-start" offset={10}>
        <DropdownTrigger>
          <button className="w-full h-12 px-4 rounded-xl bg-[#0F0F11] border border-white/10 flex items-center justify-between hover:border-white/20 transition">
            <span className="text-sm">
              {selectedModel.name}{" "}
              <span className="text-gray-500">
                ({selectedModel.credits} credits)
              </span>
            </span>

            <svg width="16" height="16" viewBox="0 0 24 24" className="text-gray-400">
              <path fill="currentColor" d="M7 10l5 5 5-5" />
            </svg>
          </button>
        </DropdownTrigger>

        <DropdownMenu
          aria-label="Model"
          onAction={(key) => setModel(key)}
          className="mt-2 p-2 bg-[#0B0B0C]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.6)] min-w-[220px]"
          itemClasses={{
            base: "px-4 py-3 rounded-xl flex items-center justify-between gap-6 data-[hover=true]:bg-white/5 transition",
          }}
        >
          {models.map((m) => {
            const selected = model === m.key;

            return (
              <DropdownItem
                key={m.key}
                textValue={m.name}
                className={selected ? "bg-pink-400/10" : ""}
              >
                <div className="flex w-full items-center justify-between">
                  <span
                    className={`text-sm ${
                      selected
                        ? "text-pink-400 font-medium"
                        : "text-gray-200"
                    }`}
                  >
                    {m.name}
                  </span>

                  <span
                    className={`text-xs whitespace-nowrap ${
                      selected
                        ? "text-pink-400/80"
                        : "text-gray-500"
                    }`}
                  >
                    {m.credits} credits
                  </span>
                </div>
              </DropdownItem>
            );
          })}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}