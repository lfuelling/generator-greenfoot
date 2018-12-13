package <%=packageName%>;

import greenfoot.*;

public class <%= mainActorName %> extends Actor {

<% if (addCustomFontClass) { %>
  /**
  * Simple constructor for <%= mainActorName %> showing how to use custom fonts.
  */
  public <%= mainActorName %>() {
    try {
      GreenfootImage buttonBg = new GreenfootImage(200, 100);
      buttonBg.setFont(new CustomFont(java.awt.Font.createFont(0, java.awt.Font.class.getResourceAsStream("/fonts/unifont.ttf")).deriveFont(12f)));
      buttonBg.drawString("Hello World", 0, buttonBg.getHeight());
      setImage(buttonBg);
    } catch(java.awt.FontFormatException | java.io.IOException e) {
      System.err.println("Unable to load fonts!");
      e.printStackTrace();
    }
  }
<% } %>

  @Override
  public void act() {
    if (Greenfoot.isKeyDown("up")) {
      setLocation(getX(), getY() - 1);
    } else if (Greenfoot.isKeyDown("down")) {
      setLocation(getX(), getY() + 1);
    }
    if (Greenfoot.isKeyDown("left")) {
      setLocation(getX() - 1, getY());
    } else if (Greenfoot.isKeyDown("right")) {
      setLocation(getX() + 1, getY());
    }
  }

}
