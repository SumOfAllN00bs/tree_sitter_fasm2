from unittest import TestCase

import tree_sitter
import tree_sitter_tree_sitter_fasm2


class TestLanguage(TestCase):
    def test_can_load_grammar(self):
        try:
            tree_sitter.Language(tree_sitter_tree_sitter_fasm2.language())
        except Exception:
            self.fail("Error loading TreeSitterFasm2 grammar")
