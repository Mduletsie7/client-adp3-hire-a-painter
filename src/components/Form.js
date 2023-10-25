import useForm from "../PostForm";

const FORM_ENDPOINT = "http://localhost:8080/painter/create"; 

const Form = () => {
 
  

  const { handleSubmit, status, message } = useForm({

  });

  if (status === "success") {
    return (
      <>
        <div className="text-2xl">Successfully created painter!</div>
        <div className="text-md">{message}</div>
      </>
    );
  }

  if (status === "error") {
    return (
      <>
        <div className="text-2xl">Error! Something went wrong</div>
        <div className="text-md">{message}</div>
      </>
    );
  }

  return (
    <div className="mainContainer" style={{margin: '20px'}}>
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
    >
      <div className="pt-0 mb-3">
        <input
          type="text"
          placeholder="painter Id"
          name="painterId"
          className="focus:outline-none focus:ring relative px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
          required
        />
      </div>
      <div className="pt-0 mb-3">
        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          className="focus:outline-none focus:ring relative px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
          required
        />
      </div>
      <div className="pt-0 mb-3">
        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          className="focus:outline-none focus:ring relative px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
          required
        />
      </div>
      <div className="pt-0 mb-3">
        <input
          type="text"
          placeholder="Description"
          name="description"
          className="focus:outline-none focus:ring relative px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
          required
        />
      </div>
      <div className="pt-0 mb-3">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="focus:outline-none focus:ring relative px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
          required
        />
        </div>
    <div className="pt-0 mb-3">
        <input
          type="text"
          placeholder="Phone"
          name="phoneNumber"
          className="focus:outline-none focus:ring relative px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
          required
        />
      </div>
      <div className="pt-0 mb-3">
        <input
          type="text"
          placeholder="Street Address"
          name="streetAddress"
          className="focus:outline-none focus:ring relative px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
          required
        />
      </div>
      <div className="pt-0 mb-3">
        <input
          type="text"
          placeholder="City"
          name="city"
          className="focus:outline-none focus:ring relative px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
          required
        />
      </div>
      <div className="pt-0 mb-3">
        <input
          type="text"
          placeholder="Postal Code"
          name="postalCode"
          className="focus:outline-none focus:ring relative px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
          required
        />
      </div>
      <div className="pt-0 mb-3">
        <input
          type="text"
          placeholder="Province"
          name="province"
          className="focus:outline-none focus:ring relative px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
          required
        />
      </div>
      {status !== "loading" && (
        <div className="pt-0 mb-3">
          <button
            className="active:bg-blue-600 hover:shadow-lg focus:outline-none px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-500 rounded shadow outline-none"
            type="submit"
          >
            Add painter
          </button>
        </div>
      )}
    </form>
    </div>
  );

};

export default Form;