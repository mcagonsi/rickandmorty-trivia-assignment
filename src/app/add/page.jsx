//just an add page to test the api/add in ui

export default function AddCharacterPage() {
    //handles submiting data to mongodb
  const handleSubmit = async (formData) => {
    "use server";
    const data = {
      name: formData.get("name"),
      species: formData.get("species"),
      status: formData.get("status"),
      gender: formData.get("gender"),
      image: formData.get("image"),
    };
    console.log("Form submitted:", data);
    await fetch(`${process.env.DOMAIN_URL}/api/add`, {
      method: "POST",
      body: JSON.stringify(data),
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl text-center font-bold mb-4">Add Character</h1>
      <form action={handleSubmit} className="max-w-md mx-auto space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label htmlFor="species" className="block mb-1">
            Species
          </label>
          <input
            type="text"
            id="species"
            name="species"
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label htmlFor="status" className="block mb-1">
            Status
          </label>
          <select
            id="status"
            name="status"
            defaultValue="alive"
            className="w-full border rounded px-3 py-2"
          >
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
          </select>
        </div>

        <div>
          <label htmlFor="gender" className="block mb-1">
            Gender
          </label>
          <input
            type="text"
            id="gender"
            name="gender"
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div>
          <label htmlFor="image" className="block mb-1">
            Image Link
          </label>
          <input
            type="text"
            id="image"
            name="image"
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Character
        </button>
      </form>
    </div>
  );
}
