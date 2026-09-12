import type { ITechnology } from "../../types/technologyTypes";
import TechnologyCard from "./TechnologyCard";

interface ExploreTechnologyProps {
  technologies: ITechnology[];
  loading: boolean;
  selectedStack: ITechnology[];
  onAddToStack: (technology: ITechnology) => void;
  onRemoveFromStack: (technologyId: string) => void;
  onRemoveAll: () => void;
}

const ExploreTechnology = ({
  technologies,
  loading,
  selectedStack,
  onAddToStack,
  onRemoveFromStack,
  onRemoveAll,
}: ExploreTechnologyProps) => {
  if (loading) {
    return (
      <div className="container mx-auto py-8 text-center text-slate-500">
        Loading technologies...
      </div>
    );
  }

  const selectedIds = new Set(selectedStack.map((item) => item.id));

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="space-y-4">
        <h2 className="text-3xl font-bold md:text-4xl">
          Explore the{" "}
          <span className="bg-linear-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>

        <p className="text-base text-slate-600">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <div className="mt-8 grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {technologies.map((tech) => (
            <TechnologyCard
              key={tech.id}
              technologies={tech}
              isSelected={selectedIds.has(tech.id)}
              onAddToStack={onAddToStack}
            />
          ))}
        </div>

        <aside className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between gap-3 border-b border-slate-200 pb-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                Your Stack
              </p>
              <h3 className="mt-1 text-2xl font-bold text-slate-800">
                {selectedStack.length}
              </h3>
            </div>

            {selectedStack.length > 0 && (
              <button
                type="button"
                onClick={onRemoveAll}
                className="text-sm font-medium text-slate-500 transition hover:text-red-500"
              >
                Remove All
              </button>
            )}
          </div>

          <div className="mt-4 space-y-3">
            {selectedStack.length === 0 ? (
              <p className="rounded-xl border border-dashed border-slate-200 bg-slate-50 px-4 py-8 text-center text-sm text-slate-500">
                Your stack is empty.
              </p>
            ) : (
              selectedStack.map((tech) => (
                <div
                  key={tech.id}
                  className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="h-9 w-9 rounded-lg bg-white p-1.5 object-contain"
                    />
                    <div>
                      <p className="text-sm font-semibold text-slate-800">{tech.name}</p>
                      <p className="text-xs text-slate-500">{tech.category}</p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => onRemoveFromStack(tech.id)}
                    className="rounded-md border border-slate-200 bg-white px-2 py-1 text-xs font-medium text-slate-600 transition hover:border-red-200 hover:text-red-500"
                  >
                    Remove
                  </button>
                </div>
              ))
            )}
          </div>
        </aside>
      </div>
    </div>
  );
};

export default ExploreTechnology;