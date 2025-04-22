const Blogs = () => {
  return (
    <div className="w-9/11 mx-auto space-y-4">
      <h3 className="font-bold text-4xl text-center">Blogs</h3>
      <p className="text-center pb-8">Frequently Asked Questions</p>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title font-semibold">
          What is useState and how does it work in React?
        </div>
        <div className="collapse-content text-sm">
          useState is a React Hook that lets us add a state variable to our
          component. In React, the useState Hook allows us to add state to
          functional components. useState returns an array with two values: the
          current state and a function to update it.
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          What is the purpose of useEffect in React?
        </div>
        <div className="collapse-content text-sm">
          The useEffect Hook allows us to perform common side effects in
          function components. These side effects are tasks outside the
          component scope, such as fetching data, interacting with the DOM, or
          managing subscriptions. The useEffect Hook takes two arguments: A
          callback function that contains the side effect logic. An optional
          array of dependencies that controls when the effect runs.
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          What is a custom hook in React and when should you use one?
        </div>
        <div className="collapse-content text-sm">
          Custom hook in React is a way to make customized hooks using react's
          built in hooks like useState, useEffects etc. It can be made for
          developer's specific need without changing react itself. It should be
          used when developers are repeating same type of hooks doing the same
          thing again and again. Making a custom hook out of the same logic and
          reusing it keeps code more maintainable and organized.
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          Difference between controlled and uncontrolled components. Which one
          is better?
        </div>
        <div className="collapse-content text-sm">
          Controlled components are managed by React state, providing more
          control and synchronization, while uncontrolled components delegate
          control to the DOM, offering flexibility and performance benefits in
          certain scenarios. While both approaches have their merits, controlled
          components are generally recommended for most React applications. They
          offer better control, easier debugging, and improved maintainability,
          especially for complex forms.
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          Tell us something about useFormStatus() in React.
        </div>
        <div className="collapse-content text-sm">
          useFormStatus is a Hook that gives us status information of the last
          form submission. useFormStatus does not take any parameters though it
          returns important information about last from submission. One of the
          case is when developer needs to display a pending state during form
          submission using pending property of useFormStatus().
        </div>
      </div>
    </div>
  );
};

export default Blogs;
