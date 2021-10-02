export type Data = {
  name: string;
  role: string;
  contact: {
    phone: string;
    email: string;
  };
  skills: Array<SkillType>;
  profileDescription: string;
};

export type SkillType = {
  name: string;
  skillRate: number;
};
