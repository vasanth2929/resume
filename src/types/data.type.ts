export type Data = {
  name: string;
  role: string;
  contact: {
    phone: string;
    email: string;
  };
  skills: Array<SkillType>;
};

export type SkillType = {
  name: string;
  skillRate: number;
};
