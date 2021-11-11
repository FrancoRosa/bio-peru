import { useStoreState } from "easy-peasy";
import { useParams } from "react-router";
import { toDate } from "../js/helpers";
import html2pdf from "html2pdf.js";
import logo from "../assets/logo.jpeg";

const PrintFormat = () => {
  const { device_id } = useParams();
  const devices = useStoreState((state) => state.devices);
  const device = devices.find((x) => x.id == device_id);
  const deviceTypes = useStoreState((state) => state.deviceTypes);
  const maintenances = useStoreState((state) => state.maintenances);
  const maintainers = useStoreState((state) => state.maintainers);
  const user = useStoreState((state) => state.user);
  const maintainer = maintainers.find((m) => m.id == user.id);
  const deviceType = deviceTypes.find((x) => x.id == device.device_type_id);

  const formatCode = () => {
    const maintenancesCount = maintenances.filter(
      (x) => x.device_id == device.id
    ).length;
    return (
      String(device.id).padStart(4, "0") +
      " - " +
      String(maintenancesCount + 1).padStart(4, "0")
    );
  };

  const getActions = () => {
    const actions = deviceType.protocol.split("\n");
    if (actions.length < 10) {
      const actionsLeft = 10 - actions.length;
      for (let index = 0; index < actionsLeft; index++) {
        actions.push("");
      }
    }
    actions.splice(10);
    return actions;
  };

  const downloadPDF = () => {
    const pdf_content = document.querySelector("#pdf_format");
    html2pdf()
      .set({
        margin: [0.1, 0.1],
        filename: "biomedicas - " + formatCode(),
        html2canvas: {
          scale: 1,
          letterRendering: true,
        },
        image: { type: "jpeg", quality: 1 },
        jsPDF: {
          unit: "in",
          format: "a4",
          orientation: "portrait",
        },
      })
      .from(pdf_content)
      .save()
      .catch((err) => console.log(err));
  };

  return (
    <div className="column ">
      <h1 className="title is-3 mt-4">Formato imprimible</h1>
      <div className="mt-4 is-flex is-flex-centered is-flex-direction-column ">
        <style
          type="text/css"
          dangerouslySetInnerHTML={{
            __html:
              '\n\t\tbody,div,table,thead,tbody,tfoot,tr,th,td,p { \n\t\t\tfont-family:"Calibri";\n\t\t\tfont-size:x-small;\n\t\t}\n\t\t.empty {\n\t\t\tline-height: 0.5;\n\t\t}\n\t\t.l1 {\n\t\t\tline-height: 1.5;\n\t\t}\n\n\t\ta.comment-indicator:hover + comment {\n\t\t\tbackground:#ffd;\n\t\t\tposition:absolute;\n\t\t\tdisplay:block;\n\t\t\tborder:1px solid black;\n\t\t\tpadding:0.5em;\n\t\t} \n\t\ta.comment-indicator { \n\t\t\tbackground:red;\n\t\t\tdisplay:inline-block;\n\t\t\tborder:1px solid black;\n\t\t\twidth:0.5em;\n\t\t\theight:0.5em;\n\t\t} \n\t\tcomment { display:none;  } \n\t',
          }}
        />
        <table cellSpacing={0} border={0} id="pdf_format">
          <colgroup width={29} />
          <colgroup width={109} />
          <colgroup span={3} width={79} />
          <colgroup width={31} />
          <colgroup width={125} />
          <colgroup width={105} />
          <colgroup width={94} />
          <colgroup width={122} />
          <tbody>
            <tr>
              <td
                style={{
                  borderTop: "0px solid #000000",
                  borderBottom: "0px solid #000000",
                  borderLeft: "0px solid #000000",
                  borderRight: "0px solid #000000",
                  backgroundImage: `url(${logo})`,
                  backgroundSize: "75% 100%",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
                colSpan={3}
                rowSpan={4}
                height={55}
                align="center"
                valign="middle"
              ></td>
              <td colSpan={5} align="center" valign="bottom">
                <b>
                  <font color="#000000">
                    REPORTE DE SERVICIO DE MANTENIMIENTO
                  </font>
                </b>
              </td>
              <td align="left" valign="bottom">
                <b>
                  <font color="#000000">
                    <br />
                  </font>
                </b>
              </td>
              <td align="left" valign="bottom">
                <b>
                  <font color="#000000">
                    <br />
                  </font>
                </b>
              </td>
            </tr>
            <tr>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                align="center"
                valign="middle"
                bgcolor="#D0CECE"
              >
                <font size={1} color="#000000">
                  Numero de RSM
                </font>
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                align="center"
                valign="middle"
                sdnum="1033;0;M/D/YYYY"
              >
                <font color="#000000">{formatCode()}</font>
              </td>
            </tr>
            <tr>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                align="center"
                valign="middle"
                bgcolor="#D0CECE"
              >
                <font size={1} color="#000000">
                  Fecha de emision
                </font>
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                align="center"
                valign="middle"
                sdval={44363}
                sdnum="1033;0;M/D/YYYY"
              >
                <font color="#000000">{toDate(Date.now())}</font>
              </td>
            </tr>
            <tr className="empty">
              <td height={18} align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
            </tr>
            <tr>
              <td height={10} align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                colSpan={3}
                height={18}
                align="left"
                valign="bottom"
                bgcolor="#D0CECE"
              >
                <b>
                  <font color="#000000">ORGANISMO DESCONCENTRADO</font>
                </b>
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                colSpan={7}
                align="center"
                valign="bottom"
                contenteditable="true"
              >
                <font color="#000000">
                  <br />
                </font>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                colSpan={3}
                height={18}
                align="left"
                valign="bottom"
                bgcolor="#D0CECE"
              >
                <b>
                  <font color="#000000">UNIDAD PRESTADORA </font>
                </b>
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                colSpan={7}
                align="center"
                valign="bottom"
                contenteditable="true"
              >
                <b>
                  <font color="#000000">
                    <br />
                  </font>
                </b>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                colSpan={3}
                height={18}
                align="left"
                valign="bottom"
                bgcolor="#D0CECE"
              >
                <b>
                  <font color="#000000">SERVICIO ASISTENCIAL </font>
                </b>
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                colSpan={7}
                align="center"
                valign="bottom"
                contenteditable="true"
              >
                <b>
                  <font color="#000000">
                    <br />
                  </font>
                </b>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                colSpan={3}
                height={18}
                align="left"
                valign="bottom"
                bgcolor="#D0CECE"
              >
                <b>
                  <font color="#000000">UBICACIÓN </font>
                </b>
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                colSpan={7}
                align="center"
                valign="bottom"
                contenteditable="true"
              >
                <b>
                  <font color="#000000">
                    <br />
                  </font>
                </b>
              </td>
            </tr>
            <tr>
              <td height={18} align="left" valign="bottom">
                <b>
                  <font color="#000000">
                    <br />
                  </font>
                </b>
              </td>
              <td align="left" valign="bottom">
                <b>
                  <font color="#000000">
                    <br />
                  </font>
                </b>
              </td>
              <td align="left" valign="bottom">
                <b>
                  <font color="#000000">
                    <br />
                  </font>
                </b>
              </td>
              <td align="left" valign="bottom">
                <b>
                  <font color="#000000">
                    <br />
                  </font>
                </b>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
            </tr>
            <tr>
              <td colSpan={3} height={18} align="left" valign="middle">
                <b>
                  <font color="#000000">Denominacion general del equipo:</font>
                </b>
              </td>
              <td colSpan={3} height={18} align="left" valign="middle">
                <b>
                  <font color="#000000">{deviceType.name}</font>
                </b>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
            </tr>
            <tr>
              <td colSpan={3} height={18} align="left" valign="middle">
                <b>
                  <font color="#000000">Denominacion especifica:</font>
                </b>
              </td>
              <td colSpan={3} height={18} align="left" valign="middle">
                <b>
                  <font color="#000000">{device.name}</font>
                </b>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
            </tr>
            <tr>
              <td colSpan={3} height={18} align="left" valign="bottom">
                <b>
                  <font color="#000000">Marca:</font>
                </b>
              </td>
              <td colSpan={2} height={18} align="left" valign="bottom">
                <b>
                  <font color="#000000">{device.brand}</font>
                </b>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <b>
                  <font color="#000000">Modelo:</font>
                </b>
              </td>
              <td align="left" valign="bottom">
                <b>
                  <font color="#000000">{device.model}</font>
                </b>
              </td>
              <td align="left" valign="bottom">
                <b>
                  <font color="#000000">Serie:</font>
                </b>
              </td>
              <td align="left" valign="bottom">
                <b>
                  <font color="#000000">{device.serial}</font>
                </b>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
            </tr>
            <tr>
              <td colSpan={2} height={18} align="left" valign="bottom">
                <b>
                  <font color="#000000">Cobertura:</font>
                </b>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td colSpan={2} align="left" valign="middle">
                <font color="#000000">Taller biomedico</font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td colSpan={2} align="left" valign="bottom">
                <b>
                  <font color="#000000">Tipo de equipamiento:</font>
                </b>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">Biomedico</font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
            </tr>
            <tr>
              <td colSpan={3} height={18} align="left" valign="middle">
                <b>
                  <font color="#000000">Tipo de mantenimiento:</font>
                </b>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <b>
                  <font color="#000000">
                    <br />
                  </font>
                </b>
              </td>
              <td align="left" valign="bottom">
                <b>
                  <font color="#000000">
                    <br />
                  </font>
                </b>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
            </tr>
            <tr>
              <td height={18} align="left" valign="bottom">
                <b>
                  <font color="#000000">Prioridad:</font>
                </b>
              </td>
              <td align="left" valign="bottom">
                <b>
                  <font color="#000000">
                    <br />
                  </font>
                </b>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <b>
                  <font color="#000000">
                    <br />
                  </font>
                </b>
              </td>
              <td align="left" valign="bottom">
                <b>
                  <font color="#000000">
                    <br />
                  </font>
                </b>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
            </tr>
            <tr className="empty">
              <td style={{ height: "0.1em" }} align="left" valign="bottom">
                <b>
                  <font color="#000000">
                    <br />
                  </font>
                </b>
              </td>
              <td style={{ height: "0.1em" }} align="left" valign="bottom">
                <b>
                  <font color="#000000">
                    <br />
                  </font>
                </b>
              </td>
              <td style={{ height: "0.1em" }} align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td style={{ height: "0.1em" }} align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td style={{ height: "0.1em" }} align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td style={{ height: "0.1em" }} align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td style={{ height: "0.1em" }} align="left" valign="bottom">
                <b>
                  <font color="#000000">
                    <br />
                  </font>
                </b>
              </td>
              <td style={{ height: "0.1em" }} align="left" valign="bottom">
                <b>
                  <font color="#000000">
                    <br />
                  </font>
                </b>
              </td>
              <td style={{ height: "0.1em" }} align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td style={{ height: "0.1em" }} align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                colSpan={6}
                height={18}
                align="center"
                valign="middle"
                bgcolor="#D0CECE"
              >
                Descripcion de la solicitud de trabajo o falla del equipo
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                colSpan={3}
                align="center"
                valign="bottom"
                bgcolor="#D0CECE"
              >
                <font color="#000000">Fecha de conformidad</font>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                colSpan={6}
                rowSpan={2}
                height={37}
                align="center"
                valign="middle"
                contentEditable
              >
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                colSpan={3}
                align="center"
                valign="bottom"
                contentEditable
              >
                <font color="#000000">
                  <br />
                </font>
              </td>
            </tr>
            <tr>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
            </tr>
            <tr>
              <td height={18} align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                colSpan={3}
                rowSpan={3}
                align="center"
                valign="bottom"
              >
                <font color="#000000">
                  <br />
                </font>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                colSpan={6}
                height={18}
                align="center"
                valign="middle"
                bgcolor="#D0CECE"
              >
                <font color="#000000">Diagnóstico</font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                colSpan={6}
                rowSpan={2}
                height={37}
                align="center"
                valign="middle"
                contentEditable
              >
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
            </tr>
            <tr>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                colSpan={3}
                align="center"
                valign="bottom"
                bgcolor="#D0CECE"
              >
                <font color="#000000">Firma y sello</font>
              </td>
            </tr>
            <tr>
              <td height={10} align="center" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="center" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="center" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="center" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="center" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="center" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                colSpan={3}
                height={18}
                align="left"
                valign="middle"
              >
                <b>
                  <font color="#000000">Estado inicial del bien:</font>
                </b>
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                colSpan={7}
                align="center"
                valign="middle"
                contentEditable
              >
                <font color="#000000">
                  <br />
                </font>
              </td>
            </tr>
            <tr>
              <td height={10} align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                height={18}
                align="center"
                valign="bottom"
                bgcolor="#D0CECE"
              >
                <font color="#000000">Nro.</font>
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                colSpan={9}
                align="center"
                valign="bottom"
                bgcolor="#D0CECE"
              >
                <font color="#000000">
                  Descripcion de la actividad ejecutada
                </font>
              </td>
            </tr>

            {getActions().map((action, i) => (
              <tr key={i} className="l1">
                <td
                  style={{
                    borderTop: "1px solid #000000",
                    borderBottom: "1px solid #000000",
                    borderLeft: "1px solid #000000",
                    borderRight: "1px solid #000000",
                    paddingLeft: "5px",
                  }}
                  colSpan={1}
                  align="left"
                  valign="bottom"
                >
                  <font color="#000000">{i + 1}</font>
                </td>
                <td
                  style={{
                    borderTop: "1px solid #000000",
                    borderBottom: "1px solid #000000",
                    borderLeft: "1px solid #000000",
                    borderRight: "1px solid #000000",
                    paddingLeft: "5px",
                  }}
                  colSpan={9}
                  align="left"
                  valign="bottom"
                  contentEditable
                >
                  <font color="#000000">{action}</font>
                </td>
              </tr>
            ))}

            <tr>
              <td height={10} align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="center" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="center" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="center" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="center" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="center" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="center" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="center" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="center" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="center" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                colSpan={3}
                height={26}
                align="center"
                valign="middle"
                bgcolor="#E7E6E6"
              >
                <b>
                  <font color="#000000">Estado final del bien: </font>
                </b>
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                colSpan={2}
                align="center"
                valign="middle"
                contentEditable
              >
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="center" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="center" valign="bottom">
                <b>
                  <font color="#000000">Garantia:</font>
                </b>
              </td>
              <td align="center" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                align="left"
                valign="middle"
                bgcolor="#CCCCCC"
              >
                <font color="#000000"> Fecha inicio</font>
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                align="center"
                valign="bottom"
                contentEditable
              >
                <font color="#000000">
                  <br />
                </font>
              </td>
            </tr>
            <tr>
              <td height={24} align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="center" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="center" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="center" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="center" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="center" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="center" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="center" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                align="left"
                valign="middle"
                bgcolor="#CCCCCC"
              >
                <font color="#000000"> Fecha término</font>
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                align="center"
                valign="bottom"
                contentEditable
              >
                <font color="#000000">
                  <br />
                </font>
              </td>
            </tr>
            <tr>
              <td height={10} align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="center" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="center" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="center" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="center" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="center" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="center" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="center" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="center" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                colSpan={4}
                height={18}
                align="left"
                valign="middle"
              >
                <b>
                  <font color="#000000">
                    Fecha programada (Solo trabajos programados):
                  </font>
                </b>
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                align="center"
                valign="bottom"
                contentEditable
              >
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                colSpan={2}
                align="left"
                valign="middle"
              >
                <b>
                  <font color="#000000">Total horas programadas:</font>
                </b>
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                colSpan={2}
                align="center"
                valign="middle"
                contentEditable
              >
                <font color="#000000">
                  <br />
                </font>
              </td>
            </tr>
            <tr>
              <td height={18} align="left" valign="bottom">
                <b>
                  <font color="#000000">
                    <br />
                  </font>
                </b>
              </td>
              <td align="center" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="center" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="center" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="center" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="center" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="center" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="center" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="center" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                rowSpan={2}
                height={37}
                align="center"
                valign="middle"
                bgcolor="#D0CECE"
              >
                <b>
                  <font color="#000000">N°</font>
                </b>
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                colSpan={2}
                rowSpan={2}
                align="center"
                valign="middle"
                bgcolor="#D0CECE"
              >
                <font color="#000000">Origen de la adquisición</font>
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                colSpan={3}
                rowSpan={2}
                align="center"
                valign="middle"
                bgcolor="#D0CECE"
              >
                <font color="#000000">Repuesto/Caracteristicas</font>
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                rowSpan={2}
                align="center"
                valign="middle"
                bgcolor="#D0CECE"
              >
                <font color="#000000">Devolución-S/N</font>
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                rowSpan={2}
                align="center"
                valign="middle"
                bgcolor="#D0CECE"
              >
                <font color="#000000">Cant.</font>
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                colSpan={2}
                align="center"
                valign="middle"
                bgcolor="#D0CECE"
              >
                <font color="#000000">COSTOS</font>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                align="center"
                valign="middle"
                bgcolor="#D0CECE"
              >
                <font color="#000000">Unitario</font>
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                align="center"
                valign="middle"
                bgcolor="#D0CECE"
              >
                <font color="#000000">TOTAL</font>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                height={18}
                align="center"
                valign="bottom"
                contentEditable
              >
                <b>
                  <font color="#000000">
                    <br />
                  </font>
                </b>
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                colSpan={2}
                align="center"
                valign="bottom"
                contentEditable
              >
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                colSpan={3}
                align="center"
                valign="middle"
                contentEditable
              >
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                align="center"
                valign="bottom"
                contentEditable
              >
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                align="center"
                valign="bottom"
                contentEditable
              >
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                align="center"
                valign="bottom"
                contentEditable
              >
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                align="left"
                valign="bottom"
                contentEditable
              >
                <font color="#000000">
                  <br />
                </font>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                height={18}
                align="center"
                valign="bottom"
                contentEditable
              >
                <b>
                  <font color="#000000">
                    <br />
                  </font>
                </b>
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                colSpan={2}
                align="center"
                valign="bottom"
                contentEditable
              >
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                colSpan={3}
                align="center"
                valign="middle"
                contentEditable
              >
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                align="center"
                valign="bottom"
                contentEditable
              >
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                align="center"
                valign="bottom"
                contentEditable
              >
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                align="center"
                valign="bottom"
                contentEditable
              >
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                align="left"
                valign="bottom"
                contentEditable
              >
                <font color="#000000">
                  <br />
                </font>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                height={18}
                align="center"
                valign="bottom"
                contentEditable
              >
                <b>
                  <font color="#000000">
                    <br />
                  </font>
                </b>
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                colSpan={2}
                align="center"
                valign="bottom"
                contentEditable
              >
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                colSpan={3}
                align="center"
                valign="middle"
                contentEditable
              >
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                align="center"
                valign="bottom"
                contentEditable
              >
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                align="center"
                valign="bottom"
                contentEditable
              >
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                align="center"
                valign="bottom"
                contentEditable
              >
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                align="left"
                valign="bottom"
                contentEditable
              >
                <font color="#000000">
                  <br />
                </font>
              </td>
            </tr>
            <tr>
              <td height={18} align="center" valign="bottom">
                <b>
                  <font color="#000000">
                    <br />
                  </font>
                </b>
              </td>
              <td align="center" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="center" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="center" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="center" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="center" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="center" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                align="center"
                valign="bottom"
                bgcolor="#E7E6E6"
              >
                <font color="#000000">TOTAL</font>
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                align="center"
                valign="bottom"
                contentEditable
              >
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                align="left"
                valign="bottom"
                contentEditable
              >
                <font color="#000000">
                  <br />
                </font>
              </td>
            </tr>
            <tr>
              <td height={10} align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="center" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="center" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="center" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="center" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="center" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="center" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="center" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="center" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                colSpan={8}
                height={18}
                align="center"
                valign="bottom"
                bgcolor="#D0CECE"
              >
                <font color="#000000">Nombre del personal</font>
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                colSpan={2}
                align="center"
                valign="bottom"
                bgcolor="#D0CECE"
              >
                <font color="#000000">DNI</font>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                colSpan={8}
                height={18}
                align="center"
                valign="bottom"
                contentEditable
              >
                <font color="#000000">{maintainer.name}</font>
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                colSpan={2}
                align="center"
                valign="bottom"
                contentEditable
              >
                <font color="#000000">{maintainer.dni}</font>
              </td>
            </tr>
            <tr className="empty">
              <td height={10} align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                colSpan={10}
                height={12}
                align="left"
                valign="bottom"
                bgcolor="#D0CECE"
              >
                <font color="#000000"> Observaciones</font>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                colSpan={10}
                rowSpan={3}
                height={50}
                align="center"
                valign="bottom"
                contentEditable
              >
                <font color="#000000">
                  <br />
                </font>
              </td>
            </tr>
            <tr></tr>
            <tr></tr>
            <tr>
              <td height={10} align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                colSpan={3}
                rowSpan={3}
                height={55}
                align="center"
                valign="bottom"
              >
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                colSpan={2}
                rowSpan={3}
                align="center"
                valign="bottom"
              >
                <font color="#000000">
                  <br />
                </font>
              </td>
            </tr>
            <tr>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
            </tr>
            <tr>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                colSpan={3}
                height={21}
                align="center"
                valign="bottom"
                bgcolor="#D0CECE"
              >
                <font size={1} color="#000000">
                  Firma y sello del responsable de mantenimiento
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td align="left" valign="bottom">
                <font color="#000000">
                  <br />
                </font>
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                colSpan={2}
                align="center"
                valign="middle"
                bgcolor="#D0CECE"
              >
                <font size={1} color="#000000">
                  Visto bueno del cliente
                </font>
              </td>
            </tr>
          </tbody>
        </table>
        {/* ************************************************************************** */}
      </div>
      <div className="is-flex is-flex-centered m-4">
        <button
          className="button mt-4 mb-4 is-outlined is-success"
          onClick={downloadPDF}
        >
          Descargar
        </button>
      </div>
    </div>
  );
};

export default PrintFormat;
