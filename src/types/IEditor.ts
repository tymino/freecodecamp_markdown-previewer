interface IEditor {
  content: string;
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export type { IEditor };
