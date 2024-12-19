import subprocess
import time
import sys

def launch_tests():
    """
    Lance les tests sur les deux simulateurs Android et iOS.
    Vérifie d'abord que les deux sont lancés.
    """
    def check_android_simulator():
        result = subprocess.run(['adb', 'devices'], capture_output=True, text=True)
        return 'emulator' in result.stdout

    def check_ios_simulator():
        result = subprocess.run(['xcrun', 'simctl', 'list', 'devices'], capture_output=True, text=True)
        return 'Booted' in result.stdout

    def kill_android_simulator():
        print("Arrêt du simulateur Android...")
        subprocess.run(['adb', 'emu', 'kill'])
        time.sleep(5)

    def run_android_tests():
        print("Lancement des tests sur Android...")
        result = subprocess.run(['maestro', 'test', '--env', 'platform=android', 'maestro/tests/navigate-details-screen.yaml'])
        return result.returncode == 0

    def run_ios_tests():
        print("Lancement des tests sur iOS...")
        result = subprocess.run(['maestro', 'test', '--env', 'platform=ios', 'maestro/tests/navigate-details-screen.yaml'])
        return result.returncode == 0

    # Vérifier l'état initial des simulateurs
    android_was_running = check_android_simulator()
    ios_was_running = check_ios_simulator()

    all_tests_passed = True

    if not android_was_running or not ios_was_running:
        print("ERREUR : Les deux simulateurs doivent être lancés\n")
        print("État des simulateurs :")
        print(f"Android : {'Lancé' if android_was_running else 'Non lancé'}")
        print(f"iOS : {'Lancé' if ios_was_running else 'Non lancé'}")
        print("\nVeuillez lancer les deux simulateurs et réessayer.")
        sys.exit(1)

    print("Les deux simulateurs sont détectés. Exécution séquentielle Android puis iOS")
    all_tests_passed &= run_android_tests()
    kill_android_simulator()
    all_tests_passed &= run_ios_tests()

    print("\n=== Rapport Final ===")
    print(f"Tous les tests ont {'réussis' if all_tests_passed else 'échoués'}")
    sys.exit(0 if all_tests_passed else 1)

if __name__ == "__main__":
    launch_tests()