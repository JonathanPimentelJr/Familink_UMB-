import kivy
from kivy.core.window import Window
from kivy.uix.widget import Widget
from kivy.core.window import Window
from kivy.uix.screenmanager import ScreenManager, Screen
from kivy.lang import Builder

from kivy.app import App


#class object for the HomeScreen
class LandingScreen(Screen):
    pass

#class object for the HomeScreen
class ScanZupuScreen(Screen):
    pass

#class object for the HomeScreen
class DYHScreen(Screen):
    pass

#class object for the HomeScreen
class LoginScreen(Screen):
    pass

class FamilinkApp(App):
    def build(self):
        pass
    
class WindowManager(ScreenManager):
    pass
    
kv = Builder.load_file("FamilinkRoughDraft.kv")
class FamilinkApp(App):
    def build(self):
        # Create a window
        Window.size = (400, 600)  # Set the window size (width, height)
        Window.title = 'Familink App'  # Set the window title
        # Set the background color (e.g., light gray)
        Window.clearcolor = (0.1, 0.75, 0, 1)
        return kv



if __name__ == '__main__':
    FamilinkApp().run()
