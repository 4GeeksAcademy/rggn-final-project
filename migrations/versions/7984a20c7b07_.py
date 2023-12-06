"""empty message

Revision ID: 7984a20c7b07
Revises: 
Create Date: 2023-11-27 01:41:37.772316

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '7984a20c7b07'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('countries',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=120), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('name')
    )
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=120), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('password', sa.String(length=180), nullable=False),
    sa.Column('salt', sa.String(length=80), nullable=False),
    sa.Column('countries_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['countries_id'], ['countries.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('user')
    op.drop_table('countries')
    # ### end Alembic commands ###