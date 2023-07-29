export const OurFriendWorkDays = ({ isOpen, from, to }) => {
  return (
    <>
      <option value="">{isOpen ? `${from}-${to}` : 'close'}</option>
    </>
  );
};
