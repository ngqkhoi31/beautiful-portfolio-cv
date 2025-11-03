import { useState } from "react";
import { cn } from "../lib/utils";

//const 1 array tinh chua cac ky nang
//trong arrat sex la tung object
//name ten ky nang, category phan nhom de loc
const skills = [
  // Frontend
  { name: "HTML/CSS", level: 0, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 90, category: "frontend" },
  { name: "TypeScript", level: 85, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Next.js", level: 80, category: "frontend" },

  // Backend
  { name: "Node.js", level: 80, category: "backend" },
  { name: "Express", level: 75, category: "backend" },
  { name: "MongoDB", level: 70, category: "backend" },
  { name: "PostgreSQL", level: 65, category: "backend" },
  { name: "GraphQL", level: 60, category: "backend" },
];

// 1 array categories dung de tao cac nut loc
const categories = ["all", "frontend", "backend"];

export const SkillsSection = () => {
  //lu category dang chon, setActiveCategory de doi khi nguoi dung click nut
  const [activeCategory, setActiveCategory] = useState("all");

  //doan nay viet ra de loc danh sach skill dua theo loai category ma nguoi dung chon
  //const 1 filteredSkills la ket qua loc mang skills theo activeCategory
  //logic: neu active = 'all' thi show va giu tat ca, nguoc lai giu nhung skill co skill.category === activeCategory
  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {/**goi 1 method map de tao 1 button cho moi category
           * key se la index
           * onClick thay doi state khi click
           */}
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              /**trong className nay su dung cn
               * voi dieu kien
               * neu activeCategory === category thi style active
               * khong thi se la style mac dinh
               */
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/**filteredSkills.map o day co tac dung la render moi skill thanh 1 card
           * key cung dung la index
           */}
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              {/**
               * animate-[gro_1.5s_ease-out]
               * grow muc dich su dung tang tu 0% -> 100%
               * trong nay thi khong can su dung cung van co the hien thi duoc style chieu rong theo level
               */}
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                {/**giai thich trong doan nay
                 * tai sao lai su dung <div/> ma khong phai <div></div>
                 * trong div khong co noi dung con nen su dung <div/> de ngan gon
                 */}
                <div
                  className="bg-primary h-2 rounded-full origin-left "
                  //doan nay do day se lay so level trong array skills
                  //set chieu rong thuc te cua phan tu inner theo ti le phan tram cua div cha
                  //khi React render,brower ap style inline ngay lap tuc inner element co chieu rong tuong ung ngay khi dom duoc pained
                  //vi the style UI se hien thi dung skill.level
                  style={{ width: skill.level + "%" }}
                />
              </div>

              {/** doan nay dung de hien thi level */}
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
