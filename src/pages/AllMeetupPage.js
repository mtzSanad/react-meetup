const AllMeetup = () => {
  const data = [
    { id: 1, text: "adfasdf" },
    { id: 2, text: "sadfasdf" },
  ];
  return (
    <>
      <div>All Meetup</div>
      <ul>
        {data.map((ele) => (
          <div key={ele.id}>{ele.text}</div>
        ))}
      </ul>
    </>
  );
};

export default AllMeetup;
