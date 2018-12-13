package greenfoot;

/**
 * This is a utility class that makes the package-private
 * Constructor that uses java.awt.Font available publicly.
 */
public class CustomFont extends greenfoot.Font {

    /**
     * Constructor.
     * @param font The font to use.
     */
    public CustomFont(java.awt.Font font) {
        super(font);
    }
}
