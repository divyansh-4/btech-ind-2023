export default function TitleCard({ title, subtext, graphic }) {
  return (
    <div>
      <div
        className="relative"
        style={{
          backgroundColor: "#252525",
          padding: "28px 90px 28px 28px",
          borderRadius: "18px",
          boxShadow:
            "0 4px 4px 0 rgba(0,0,0,0.25), 18px 20px 0 0 #FAC018, 19px 21px 0 0 black, 19px 19px 0 0 black, 17px 21px 0 0 black",
        }}
      >
        <div
          style={{
            backgroundColor: "#FAC018",
            borderRadius: "20px",
            padding: "8px",
            width: "fit-content",
            textShadow: "0 3px 4px rgba(0,0,0,0.25)",
            fontSize: "1.3rem",
            lineHeight: "1.3rem",
            fontWeight: "700",
          }}
        >
          AUGUST 2 - 6
        </div>
        <div
          style={{
            fontSize: "3rem",
            color: "#E44F44",
            fontWeight: "700",
            lineHeight: "3.4rem",
            marginTop: "32px",
          }}
        >
          INDUCTION <br></br>BTECH
        </div>
        <div
          className="absolute -bottom-10 -right-5"
          style={{
            overflow: "visible",
          }}
        >
          {graphic}
        </div>
      </div>
    </div>
  );
}
