import * as Form from "@radix-ui/react-form";
import "./searchbar.css";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

const Searchbar = () => {
  return (
    <Form.Root className="FormRoot">
      <Form.Field name="FormField">
        <Form.Message className="FormMessage" match="valueMissing">
          Please enter a customer name
        </Form.Message>
        <MagnifyingGlassIcon className="MagnifyingGlassIcon" />
        <Form.Control asChild>
          <input
            placeholder="Search for Customers"
            className="SearchInput"
            type="text"
            required
          />
        </Form.Control>
      </Form.Field>
    </Form.Root>
  );
};

export default Searchbar;
