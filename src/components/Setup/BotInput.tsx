import { Field } from "../ui/field";
import { Input } from "../ui/input";

interface BotInputProps {
  onChange: (url: string) => void;
  error?: string | undefined | boolean;
}

export const BotInput: React.FC<BotInputProps> = ({ onChange, error }) => {
  return (
    <Field label="Enter Bot Name:" error={error}>
      <Input
        type="text"
        variant={error ? "danger" : "default"}
        placeholder="E.g. Bobby"
        onChange={(e) => onChange(e.target.value)}
        className="w-full"
      />
    </Field>
  );
};
