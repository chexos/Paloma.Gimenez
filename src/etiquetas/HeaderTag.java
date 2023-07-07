package etiquetas;

import javax.servlet.jsp.JspException;
import javax.servlet.jsp.JspWriter;
import javax.servlet.jsp.tagext.TagSupport;

public class HeaderTag extends TagSupport {
	
	public int doStartTag() throws JspException {
		JspWriter out = pageContext.getOut();
		try {
			
		} catch (Exception e) {
			System.out.println("Error en HeaderTag : " + e.getMessage());
		}
		return SKIP_BODY;
	}
	
}
