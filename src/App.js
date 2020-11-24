import "./App.css";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

function App() {
  // Function to generate PDF file
  const generatePdf = () => {
    // Take screenshot using Html2Canvas
    html2canvas(document.getElementById("target")).then(function (canvas) {
      var width = canvas.width;
      var height = canvas.height;
      var millimeters = {};
      millimeters.width = Math.floor(width * 0.264583);
      millimeters.height = Math.floor(height * 0.264583);

      const imgData = canvas.toDataURL("image/png");

      const doc = new jsPDF("l", "mm", [millimeters.width, millimeters.height]);

      doc.addImage(imgData, "PNG", 0, 0);
      doc.save("Test.pdf");
    });
  };

  return (
    <div className="app" id="target">
      <div id="content" className="app__content">
        <h1>jsPDF에 오신 것을 환영합니다</h1>
        <p>안녕하세요</p>
        <p>
          대통령은 즉시 이를 공포하여야 한다. 국가원로자문회의의 조직·직무범위
          기타 필요한 사항은 법률로 정한다. 정당은 헌법재판소의 심판에 의하여
          해산된다. 국가는 전통문화의 계승·발전과 민족문화의 창달에 노력하여야
          한다.
        </p>
        <button onClick={generatePdf} id="cmd">
          PDF 생성
        </button>
      </div>
    </div>
  );
}

export default App;
