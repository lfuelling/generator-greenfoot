package <%= packageName %>;

import greenfoot.*;
import <%= fullMainActorName %>

public class <%= mainWorldName %> extends World {

  /**
  * Constructor for <%= mainWorldName %>.
  */
  public <%= mainWorldName %>()
  {
    super(850, 600, 1);
    prepare();
  }

  /**
   * Prepare the world for the start of the program.
   * That is: create the initial objects and add them to the world.
   * Z-Index is based on order of addition (last to be added is on top)
   */
  private void prepare()
  {
    <%= mainActorName %> actor = new <%= mainActorName %>();
    addObject(actor, 50, 50);
  }

}
