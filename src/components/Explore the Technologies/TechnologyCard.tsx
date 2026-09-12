import { toast } from "react-toastify";
import type { ITechnology } from "../../types/technologyTypes";

interface TechnologyCardProps {
  technologies: ITechnology;
  isSelected: boolean;
  onAddToStack: (technology: ITechnology) => void;
}

const TechnologyCard = ({
  technologies,
  isSelected,
  onAddToStack,
}: TechnologyCardProps) => {
  const { name, category, description, icon, rating, difficulty, badge } = technologies;

  const handleAddClick = () => {
    if (isSelected) {
      toast.warning(`${name} is already in your stack.`);
      return;
    }

    onAddToStack(technologies);
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <img
            src={icon}
            alt={name}
            className="h-12 w-12 rounded-xl bg-slate-50 object-contain p-2"
          />

          <div>
            <h3 className="text-lg font-semibold text-slate-800">{name}</h3>
            <p className="text-xs text-slate-500">{category}</p>
          </div>
        </div>

        <span className="rounded-full bg-violet-100 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-violet-700">
          {badge}
        </span>
      </div>

      <p className="mt-4 text-sm leading-6 text-slate-600">{description}</p>

      <div className="mt-5 flex items-center justify-between gap-3 text-xs font-medium">
        <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-emerald-700">
          {difficulty}
        </span>

        <span className="flex items-center gap-1 font-semibold text-amber-500">
          ★ {rating.toFixed(1)}
        </span>
      </div>

      <button
        type="button"
        onClick={handleAddClick}
        disabled={isSelected}
        className={`mt-5 w-full rounded-xl px-3 py-2.5 text-sm font-semibold transition cursor-pointer ${
          isSelected
            ? "cursor-default bg-emerald-100 text-emerald-700"
            : "bg-slate-900 text-white hover:bg-slate-800"
        }`}
      >
        {isSelected ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
};

export default TechnologyCard;