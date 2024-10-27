import { CustomButton, MyInput } from "../../../components/ui";

interface IProps {
  close: () => void;
}

export const AccountForm = (props: IProps) => {
  const { close } = props;
  return (
    <form className="grid gap-6 w-full">
      <MyInput label="Country" />
      <MyInput label="Account currency" />
      <MyInput label="Bank name" />
      <MyInput label="Account number" />
      <MyInput label="Account name" />
      <div className="mt-5 flex items-center gap-6">
        <div>
          <CustomButton text="Create" className="px-8" />
        </div>
        <div>
          <CustomButton
            type="button"
            onClick={close}
            text="Cancel"
            color="bg-white border hover:bg-secondary hover:text-white border-secondary text-secondary"
            className="px-8"
          />
        </div>
      </div>
    </form>
  );
};
