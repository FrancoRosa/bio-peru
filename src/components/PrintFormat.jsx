import { useParams } from "react-router"

const PrintFormat = () => {
  const {device_id} = useParams()
  const devices = useStoreState((state) => state.devices);
  const device = devices.find((x) => x.id == device_id);

  return (
    <table cellspacing="0" border="0">
    <colgroup width="29"></colgroup>
    <colgroup width="109"></colgroup>
    <colgroup span="3" width="79"></colgroup>
    <colgroup width="31"></colgroup>
    <colgroup width="125"></colgroup>
    <colgroup width="105"></colgroup>
    <colgroup width="94"></colgroup>
    <colgroup width="122"></colgroup>
    <tr>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" valigncolspan={3} rowspan=3 height="55" align="center" valign="middle"><b><font color="#000000">logo</font></b></td>
      <td colspan={5} align="center" valign="bottom"><b><font color="#000000">REPORTE DE SERVICIO DE MANTENIMIENTO</font></b></td>
      <td align="left" valign="bottom"><b><font color="#000000"><br /></font></b></td>
      <td align="left" valign="bottom"><b><font color="#000000"><br /></font></b></td>
    </tr>
    <tr>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign="middle" bgcolor="#D0CECE"><font size="1" color="#000000">Numero  de RSM</font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-right: 1px solid #000000" align="center" valign="middle" sdnum="1033;0;M/D/YYYY"><font color="#000000"><%= @format_code %></font></td>
    </tr>
    <tr>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign="middle" bgcolor="#D0CECE"><font size="1" color="#000000">Fecha de emision</font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-right: 1px solid #000000" align="center" valign="middle" sdval="44363" sdnum="1033;0;M/D/YYYY"><font color="#000000"><%= Time.now.strftime('%d/%m/%Y')%></font></td>
    </tr>
    <tr class="empty">
      <td height="18" align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
    </tr>
    <tr>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" valigncolspan={3} height="18" align="left" valign="bottom" bgcolor="#D0CECE"><b><font color="#000000">ORGANISMO DESCONCENTRADO</font></b></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan="7" align="center" valign="bottom"><font color="#000000"><br /></font></td>
      </tr>
    <tr>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" valigncolspan={3} height="18" align="left" valign="bottom" bgcolor="#D0CECE"><b><font color="#000000">UNIDAD PRESTADORA     </font></b></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan="7" align="center" valign="bottom"><b><font color="#000000"><br /></font></b></td>
      </tr>
    <tr>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" valigncolspan={3} height="18" align="left" valign="bottom" bgcolor="#D0CECE"><b><font color="#000000">SERVICIO ASISTENCIAL                      </font></b></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan="7" align="center" valign="bottom"><b><font color="#000000"><br /></font></b></td>
      </tr>
    <tr>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" valigncolspan={3} height="18" align="left" valign="bottom" bgcolor="#D0CECE"><b><font color="#000000">UBICACIÓN                                            </font></b></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan="7" align="center" valign="bottom"><b><font color="#000000"><br /></font></b></td>
      </tr>
    <tr>
      <td height="18" align="left" valign="bottom"><b><font color="#000000"><br /></font></b></td>
      <td align="left" valign="bottom"><b><font color="#000000"><br /></font></b></td>
      <td align="left" valign="bottom"><b><font color="#000000"><br /></font></b></td>
      <td align="left" valign="bottom"><b><font color="#000000"><br /></font></b></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
    </tr>
    <tr>
      <td valigncolspan={3} height="18" align="left" valign="middle"><b><font color="#000000">Denominacion general del equipo:</font></b></td>
      <td valigncolspan={3} height="18" align="left" valign="middle"><b><font color="#000000"><%=@device_type.name%></font></b></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
    </tr>
    <tr>
      <td valigncolspan={3} height="18" align="left" valign="middle"><b><font color="#000000">Denominacion especifica:</font></b></td>
      <td valigncolspan={3} height="18" align="left" valign="middle"><b><font color="#000000"><%= @device.name %></font></b></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
    </tr>
    <tr>
      <td valigncolspan={3} height="18" align="left" valign="bottom"><b><font color="#000000">Marca:</font></b></td>
      <td colspan="2" height="18" align="left" valign="bottom"><b><font color="#000000"><%= @device.brand %></font></b></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="left" valign="bottom"><b><font color="#000000">Modelo:</font></b></td>
      <td align="left" valign="bottom"><b><font color="#000000"><%= @device.model %></font></b></td>
      <td align="left" valign="bottom"><b><font color="#000000">Serie:</font></b></td>
      <td align="left" valign="bottom"><b><font color="#000000"><%= @device.serial %></font></b></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
    </tr>
    <tr>
      <td colspan="2" height="18" align="left" valign="bottom"><b><font color="#000000">Cobertura:</font></b></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td colspan="2" align="left" valign="middle"><font color="#000000">Taller biomedico</font></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td colspan="2" align="left" valign="bottom"><b><font color="#000000">Tipo de equipamiento:</font></b></td>
      <td align="left" valign="bottom"><font color="#000000">Biomedico</font></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
    </tr>
    <tr>
      <td valigncolspan={3} height="18" align="left" valign="middle"><b><font color="#000000">Tipo de mantenimiento:</font></b></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="left" valign="bottom"><b><font color="#000000"><br /></font></b></td>
      <td align="left" valign="bottom"><b><font color="#000000"><br /></font></b></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
    </tr>
    <tr>
      <td height="18" align="left" valign="bottom"><b><font color="#000000">Prioridad:</font></b></td>
      <td align="left" valign="bottom"><b><font color="#000000"><br /></font></b></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="left" valign="bottom"><b><font color="#000000"><br /></font></b></td>
      <td align="left" valign="bottom"><b><font color="#000000"><br /></font></b></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
    </tr>
    <tr class="empty">
      <td style="height: 0.1em;" align="left" valign="bottom"><b><font color="#000000"><br /></font></b></td>
      <td style="height: 0.1em;" align="left" valign="bottom"><b><font color="#000000"><br /></font></b></td>
      <td style="height: 0.1em;" align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td style="height: 0.1em;" align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td style="height: 0.1em;" align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td style="height: 0.1em;" align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td style="height: 0.1em;" align="left" valign="bottom"><b><font color="#000000"><br /></font></b></td>
      <td style="height: 0.1em;" align="left" valign="bottom"><b><font color="#000000"><br /></font></b></td>
      <td style="height: 0.1em;" align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td style="height: 0.1em;" align="left" valign="bottom"><font color="#000000"><br /></font></td>
    </tr>
    <tr>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=6 height="18" align="center" valign="middle" bgcolor="#D0CECE">Descripcion de la solicitud de trabajo o falla del equipo</td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" valigncolspan={3} align="center" valign="bottom" bgcolor="#D0CECE"><font color="#000000">Fecha de conformidad</font></td>
      </tr>
    <tr>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=6 rowspan=2 height="37" align="center" valign="middle"><font color="#000000"><br /></font></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" valigncolspan={3} align="center" valign="bottom"><font color="#000000"><br /></font></td>
      </tr>
    <tr>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
    </tr>
    <tr>
      <td height="18" align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" valigncolspan={3} rowspan=3 align="center" valign="bottom"><font color="#000000"><br /></font></td>
      </tr>
    <tr>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=6 height="18" align="center" valign="middle" bgcolor="#D0CECE"><font color="#000000">Diagnóstico</font></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      </tr>
    <tr>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=6 rowspan=2 height="37" align="center" valign="middle"><font color="#000000"><br /></font></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      </tr>
    <tr>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" valigncolspan={3} align="center" valign="bottom" bgcolor="#D0CECE"><font color="#000000">Firma y sello</font></td>
      </tr>
    <tr>
      <td height="10" align="center" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="center" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="center" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="center" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="center" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="center" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
    </tr>
    <tr>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" valigncolspan={3} height="18" align="left" valign="middle"><b><font color="#000000">Estado inicial del bien:</font></b></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan="7" align="center" valign="middle"><font color="#000000"><br /></font></td>
      </tr>
    <tr>
      <td height="10" align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
    </tr>
    <tr>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" height="18" align="center" valign="bottom" bgcolor="#D0CECE"><font color="#000000">Nro.</font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan="9" align="center" valign="bottom" bgcolor="#D0CECE"><font color="#000000">Descripcion de la actividad ejecutada</font></td>
    </tr>
    <% @actions.each_with_index do |action, i| %>
      <tr class="l1">
        <!-- <td style="border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" height="18" align="center" valign="bottom" sdval="<%= i +1 %>" sdnum="1033;"><font color="#000000"><%= i +1 %></font></td> -->
        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000; padding-left: 5px" colspan=1 align="left" valign="bottom"><font color="#000000"><%= i +1 %></font></td>
        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000; padding-left: 5px" colspan="9" align="left" valign="bottom"><font color="#000000"><%= action %></font></td>
      </tr>
    <% end %>
  
    <!-- <tr>
      <td style="border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" height="18" align="center" valign="bottom" sdval="1" sdnum="1033;"><font color="#000000">1</font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan="9" align="center" valign="bottom"><font color="#000000"><br /></font></td>
      </tr>
    <tr>
      <td style="border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" height="18" align="center" valign="bottom" sdval="2" sdnum="1033;"><font color="#000000">2</font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan="9" align="center" valign="bottom"><font color="#000000"><br /></font></td>
      </tr>
    <tr>
      <td style="border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" height="18" align="center" valign="bottom" sdval="3" sdnum="1033;"><font color="#000000">3</font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan="9" align="center" valign="bottom"><font color="#000000"><br /></font></td>
      </tr>
    <tr>
      <td style="border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" height="18" align="center" valign="bottom" sdval="4" sdnum="1033;"><font color="#000000">4</font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan="9" align="center" valign="bottom"><font color="#000000"><br /></font></td>
      </tr>
    <tr>
      <td style="border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" height="18" align="center" valign="bottom" sdval="5" sdnum="1033;"><font color="#000000">5</font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan="9" align="center" valign="bottom"><font color="#000000"><br /></font></td>
      </tr>
    <tr>
      <td style="border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" height="18" align="center" valign="bottom" sdval="6" sdnum="1033;"><font color="#000000">6</font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan="9" align="center" valign="bottom"><font color="#000000"><br /></font></td>
      </tr>
    <tr>
      <td style="border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" height="18" align="center" valign="bottom" sdval="7" sdnum="1033;"><font color="#000000">7</font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan="9" align="center" valign="bottom"><font color="#000000"><br /></font></td>
      </tr>
    <tr>
      <td style="border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" height="18" align="center" valign="bottom" sdval="8" sdnum="1033;"><font color="#000000">8</font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan="9" align="center" valign="bottom"><font color="#000000"><br /></font></td>
      </tr>
    <tr>
      <td style="border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" height="18" align="center" valign="bottom" sdval="9" sdnum="1033;"><font color="#000000">9</font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan="9" align="center" valign="bottom"><font color="#000000"><br /></font></td>
      </tr>
    <tr>
      <td style="border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" height="18" align="center" valign="bottom" sdval="10" sdnum="1033;"><font color="#000000">10</font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan="9" align="center" valign="bottom"><font color="#000000"><br /></font></td>
      </tr> -->
    <tr>
      <td height="10" align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="center" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="center" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="center" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="center" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="center" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="center" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="center" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="center" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="center" valign="bottom"><font color="#000000"><br /></font></td>
    </tr>
    <tr>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" valigncolspan={3} height="26" align="center" valign="middle" bgcolor="#E7E6E6"><b><font color="#000000">Estado final del bien: </font></b></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan="2" align="center" valign="middle"><font color="#000000"><br /></font></td>
      <td align="center" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="center" valign="bottom"><b><font color="#000000">Garantia</font></b></td>
      <td align="center" valign="bottom"><font color="#000000"><br /></font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="left" valign="middle" bgcolor="#CCCCCC"><font color="#000000">Fecha inicio</font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign="bottom"><font color="#000000"><br /></font></td>
    </tr>
    <tr>
      <td height="24" align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="center" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="center" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="center" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="center" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="center" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="center" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="center" valign="bottom"><font color="#000000"><br /></font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="left" valign="middle" bgcolor="#CCCCCC"><font color="#000000">Fecha término</font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign="bottom"><font color="#000000"><br /></font></td>
    </tr>
    <tr>
      <td height="10" align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="center" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="center" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="center" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="center" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="center" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="center" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="center" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="center" valign="bottom"><font color="#000000"><br /></font></td>
    </tr>
    <tr>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=4 height="18" align="left" valign="middle"><b><font color="#000000">Fecha programada(Solo trabajos programados):</font></b></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan="2" align="left" valign="middle"><b><font color="#000000">Total horas programadas:</font></b></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan="2" align="center" valign="middle"><font color="#000000"><br /></font></td>
      </tr>
    <tr>
      <td height="18" align="left" valign="bottom"><b><font color="#000000"><br /></font></b></td>
      <td align="center" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="center" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="center" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="center" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="center" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="center" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="center" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="center" valign="bottom"><font color="#000000"><br /></font></td>
    </tr>
    <tr>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" rowspan=2 height="37" align="center" valign="middle" bgcolor="#D0CECE"><b><font color="#000000">N°</font></b></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan="2" rowspan=2 align="center" valign="middle" bgcolor="#D0CECE"><font color="#000000">Origen de la adquisición</font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" valigncolspan={3} rowspan=2 align="center" valign="middle" bgcolor="#D0CECE"><font color="#000000">Repuesto/Caracteristicas</font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" rowspan=2 align="center" valign="middle" bgcolor="#D0CECE"><font color="#000000">Devolución-S/N</font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" rowspan=2 align="center" valign="middle" bgcolor="#D0CECE"><font color="#000000">Cant.</font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan="2" align="center" valign="middle" bgcolor="#D0CECE"><font color="#000000">COSTOS</font></td>
      </tr>
    <tr>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign="middle" bgcolor="#D0CECE"><font color="#000000">Unitario</font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign="middle" bgcolor="#D0CECE"><font color="#000000">TOTAL</font></td>
    </tr>
    <tr>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" height="18" align="center" valign="bottom" bgcolor="#FFFFFF"><b><font color="#000000"><br /></font></b></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan="2" align="center" valign="bottom" bgcolor="#FFFFFF"><font color="#000000"><br /></font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" valigncolspan={3} align="center" valign="middle" bgcolor="#FFFFFF"><font color="#000000"><br /></font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign="bottom" bgcolor="#FFFFFF"><font color="#000000"><br /></font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign="bottom" bgcolor="#FFFFFF"><font color="#000000"><br /></font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign="bottom" bgcolor="#FFFFFF"><font color="#000000"><br /></font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="left" valign="bottom" bgcolor="#FFFFFF"><font color="#000000"><br /></font></td>
    </tr>
    <tr>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" height="18" align="center" valign="bottom" bgcolor="#FFFFFF"><b><font color="#000000"><br /></font></b></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan="2" align="center" valign="bottom" bgcolor="#FFFFFF"><font color="#000000"><br /></font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" valigncolspan={3} align="center" valign="middle" bgcolor="#FFFFFF"><font color="#000000"><br /></font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign="bottom" bgcolor="#FFFFFF"><font color="#000000"><br /></font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign="bottom" bgcolor="#FFFFFF"><font color="#000000"><br /></font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign="bottom" bgcolor="#FFFFFF"><font color="#000000"><br /></font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="left" valign="bottom" bgcolor="#FFFFFF"><font color="#000000"><br /></font></td>
    </tr>
    <tr>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" height="18" align="center" valign="bottom" bgcolor="#FFFFFF"><b><font color="#000000"><br /></font></b></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan="2" align="center" valign="bottom" bgcolor="#FFFFFF"><font color="#000000"><br /></font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" valigncolspan={3} align="center" valign="middle" bgcolor="#FFFFFF"><font color="#000000"><br /></font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign="bottom" bgcolor="#FFFFFF"><font color="#000000"><br /></font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign="bottom" bgcolor="#FFFFFF"><font color="#000000"><br /></font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign="bottom" bgcolor="#FFFFFF"><font color="#000000"><br /></font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="left" valign="bottom" bgcolor="#FFFFFF"><font color="#000000"><br /></font></td>
    </tr>
    <tr>
      <td height="18" align="center" valign="bottom" bgcolor="#FFFFFF"><b><font color="#000000"><br /></font></b></td>
      <td align="center" valign="bottom" bgcolor="#FFFFFF"><font color="#000000"><br /></font></td>
      <td align="center" valign="bottom" bgcolor="#FFFFFF"><font color="#000000"><br /></font></td>
      <td align="center" valign="bottom" bgcolor="#FFFFFF"><font color="#000000"><br /></font></td>
      <td align="center" valign="bottom" bgcolor="#FFFFFF"><font color="#000000"><br /></font></td>
      <td align="center" valign="bottom" bgcolor="#FFFFFF"><font color="#000000"><br /></font></td>
      <td align="center" valign="bottom" bgcolor="#FFFFFF"><font color="#000000"><br /></font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign="bottom" bgcolor="#E7E6E6"><font color="#000000">TOTAL</font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign="bottom" bgcolor="#FFFFFF"><font color="#000000"><br /></font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="left" valign="bottom" bgcolor="#FFFFFF"><font color="#000000"><br /></font></td>
    </tr>
    <tr>
      <td height="10" align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="center" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="center" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="center" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="center" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="center" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="center" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="center" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="center" valign="bottom"><font color="#000000"><br /></font></td>
    </tr>
    <tr>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=8 height="18" align="center" valign="bottom" bgcolor="#D0CECE"><font color="#000000">Nombre del personal</font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan="2" align="center" valign="bottom" bgcolor="#D0CECE"><font color="#000000">DNI</font></td>
      </tr>
    <tr>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=8 height="18" align="center" valign="bottom"><font color="#000000"><br /></font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan="2" align="center" valign="bottom"><font color="#000000"><br /></font></td>
      </tr>
    <tr class="empty">
      <td height="10" align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
    </tr>
    <tr>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=10 height="12" align="left" valign="bottom" bgcolor="#D0CECE"><font color="#000000"> Observaciones</font></td>
      </tr>
    <tr>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=10 rowspan=3 height="50" align="center" valign="bottom"><font color="#000000"><br /></font></td>
      </tr>
    <tr>
      </tr>
    <tr>
      </tr>
    <tr>
      <td height="10" align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
    </tr>
    <tr>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" valigncolspan={3} rowspan=3 height="55" align="center" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan="2" rowspan=3 align="center" valign="bottom"><font color="#000000"><br /></font></td>
      </tr>
    <tr>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      </tr>
    <tr>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      </tr>
    <tr>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" valigncolspan={3} height="21" align="center" valign="bottom" bgcolor="#D0CECE"><font size="1" color="#000000">Firma y sello del responsable de mantenimiento</font></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td align="left" valign="bottom"><font color="#000000"><br /></font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan="2" align="center" valign="middle" bgcolor="#D0CECE"><font size="1" color="#000000">Visto bueno del cliente</font></td>
      </tr>
  </table>
  )
}

export default PrintFormat